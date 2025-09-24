# Agents Console (Next.js · App Router)

UI mínima para criação e manutenção de agentes (MVP).

## Rotas

- `/` → redireciona para **/agents/new**
- `/agents/new` → formulário para criar agente (usa Edge Function `agent-create`)
- `/agents/[id]/report` → reportar problema e gerar patch; botão para aplicar último patch

## Requisitos

- Node 18+
- Supabase com:
  - Tabelas: `agents`, `agent_versions`, `issue_reports`, `patches`
  - Edge Functions: `agent-create`, `agent-report`, `agent-apply-patch`
  - Secrets nas Functions: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `OPENAI_API_KEY`
  - (MVP) Verify JWT das functions: **OFF**

## Variáveis de ambiente

Crie `agents-console/.env.local`:



NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>


(opcional)


NEXT_PUBLIC_STORAGE_BUCKET_ATTACH=agent-attachments
NEXT_PUBLIC_STORAGE_BUCKET_EXPORTS=agent-exports


## Rodando local

```bash
cd agents-console
npm install
npm run dev
# http://localhost:3000

Deploy (Vercel)

Root Directory: agents-console/

Install: npm install

Build: npm run build

Env (Preview/Production):

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

Ignored Build Step (monorepo)

Para evitar build quando nada mudou em agents-console/**:

bash -lc 'if ! git diff --name-only $VERCEL_GIT_COMMIT_SHA~1 $VERCEL_GIT_COMMIT_SHA | grep -q "^agents-console/"; then echo "skip build"; exit 0; fi'

Smoke tests de funções

Use a Service Role Key apenas para testes locais ou via painel do Supabase (nunca no front).

# Report -> cria patch
curl -s -X POST "$SUPABASE_URL/functions/v1/agent-report" \
  -H "Authorization: Bearer $SERVICE_ROLE" -H "Content-Type: application/json" \
  -d '{"agent_id":"<uuid>","title":"Responde preço","description":"Citou preço","expected_behavior":"Evitar preço; acionar humano","severity":"high","tests":[{"name":"no_price","input":"Qual preço?","must_include":[],"must_exclude":["R$","preço","custa"],"handoff_expected":true}]}'

# Apply -> aplica último patch
curl -s -X POST "$SUPABASE_URL/functions/v1/agent-apply-patch" \
  -H "Authorization: Bearer $SERVICE_ROLE" -H "Content-Type: application/json" \
  -d '{ "agent_id":"<uuid>", "patch_id":"last", "auto": true }'

Troubleshooting

invalid_llm_output: mitigado com response_format: "json_object" + fallback no backend.

db_insert_issue_reports / 500: conferir tabelas/policies e body JSON do report.

patch_not_found: primeiro gere um report válido (ele cria o patch).

401 nas Edge Functions: se ativar Verify JWT, envie header Authorization: Bearer NEXT_PUBLIC_SUPABASE_ANON_KEY no fetch do front.

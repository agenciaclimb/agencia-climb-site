# Agents Console (Next.js + App Router)

UI mínima para criação e manutenção de agentes (MVP).

## Rotas
- `/agents/new` – formulário para criar agente (chama a Edge Function `agent-create`).
- `/agents/[id]/report` – report/manutenção do agente (usa `agent-report` e permite aplicar `agent-apply-patch`).

A rota `/` já redireciona automaticamente para `/agents/new`.

## Variáveis de ambiente

Crie `agents-console/.env.local` com as chaves do projeto Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
```

Opcional:

```env
NEXT_PUBLIC_STORAGE_BUCKET_ATTACH=agent-attachments
NEXT_PUBLIC_STORAGE_BUCKET_EXPORTS=agent-exports
```

## Rodando local

```bash
cd agents-console
npm install
npm run dev
# http://localhost:3000
```

## Deploy (Vercel)
- **Root Directory**: `agents-console/`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: padrão do Next.js (`.vercel/output`)
- **Environment Variables (Production / Preview)**:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Ignored Build Step (monorepo)
Para evitar build quando nada mudou em `agents-console/**`:

```bash
bash -lc 'if ! git diff --name-only $VERCEL_GIT_COMMIT_SHA~1 $VERCEL_GIT_COMMIT_SHA | grep -q "^agents-console/"; then echo "skip build"; exit 0; fi'
```

## Smoke tests das Edge Functions
Use a **Service Role Key** apenas localmente ou pelo painel do Supabase (nunca no front).

```bash
# Report -> cria patch
curl -s -X POST "$SUPABASE_URL/functions/v1/agent-report" \
  -H "Authorization: Bearer $SERVICE_ROLE" \
  -H "Content-Type: application/json" \
  -d '{ "agent_id":"<uuid>", "title":"Teste", "description":"...", "expected_behavior":"...", "severity":"high" }'

# Apply Patch -> aplica último patch gerado
curl -s -X POST "$SUPABASE_URL/functions/v1/agent-apply-patch" \
  -H "Authorization: Bearer $SERVICE_ROLE" \
  -H "Content-Type: application/json" \
  -d '{ "agent_id":"<uuid>", "patch_id":"last", "auto": true }'
```

## Troubleshooting
- `invalid_llm_output`: mitigado via `response_format: "json_object"` + fallback no backend.
- `404` pós-deploy: confirme **Root Directory = agents-console/** e que o domínio está apontando para o projeto correto.
- `401` nas Edge Functions: se ativar verify JWT, envie `Authorization: Bearer NEXT_PUBLIC_SUPABASE_ANON_KEY` no fetch do front.
# Vercel — Ignored Build Step (monorepo)

Para evitar builds quando não houver alterações no app do console (`agents-console/**`), cole o comando abaixo em:

**Project Settings → General → Ignored Build Step**

```bash
bash -lc 'if ! git diff --name-only $VERCEL_GIT_COMMIT_SHA~1 $VERCEL_GIT_COMMIT_SHA | grep -q "^agents-console/"; then echo "skip build"; exit 0; fi'

Como funciona

Compara os arquivos do commit atual com o anterior.

Se não houver nenhum arquivo modificado dentro de agents-console/, o script imprime "skip build" e sai com 0, instruindo a Vercel a pular o build.

Se houver mudanças no console, o build segue normalmente.

Observação: esse comando deve ser configurado no projeto da Vercel que aponta para agents-console/ (Root Directory configurado).
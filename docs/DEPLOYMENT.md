# Deployment

Production deploys from `main` to the IONOS webspace over SFTP.

## GitHub Actions secrets

The workflow expects these repository secrets:

- `IONOS_SFTP_HOST`
- `IONOS_SFTP_PORT`
- `IONOS_SFTP_USER`
- `IONOS_SFTP_PASSWORD`
- `IONOS_DEPLOY_PATH`

The current deployment path is `/sam16/`.

## Release flow

`feature branch → pull request → merge to main → Astro build → SFTP upload to IONOS`

The deployment helper uploads the generated `dist/` directory. Credentials are read only from GitHub Actions secrets and are never stored in the repository.

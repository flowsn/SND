# Deployment

Production is deployed from `main` via GitHub Actions.

Required repository secrets:

- `HETZNER_HOST` — hostname or IP of the server
- `HETZNER_USER` — SSH deployment user
- `HETZNER_SSH_KEY` — private SSH key for that user
- `HETZNER_DEPLOY_PATH` — absolute target directory served by the web server

Recommended server setup:

1. Create a dedicated deployment user with write access only to the site directory.
2. Add the corresponding public key to that user's `authorized_keys`.
3. Point nginx/Caddy at `HETZNER_DEPLOY_PATH`.
4. Keep production edits out of the server filesystem; make changes in Git and deploy them.

Workflow:

`feature branch → pull request → review → merge to main → automatic deployment`

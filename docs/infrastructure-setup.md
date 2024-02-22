# Infrastructure setup

## Setup a changelong
**GitHub Action: release-please**

See: https://github.com/googleapis/release-please
1. Create a new personal access token in GitHub
2. Set it as a repository secret in the repository settings
3. Add this `.github/workflows/release-please.yml` file

## Package
**Package standalone with Docker**

See: https://nextjs.org/docs/pages/building-your-application/deploying#docker-image
1. Add this `Dockerfile` 
2. Build the image (to test that it works)

## Deploy
**GitHub Actions: cloudrun-docker.yml**

Build and push a Docker container to Google Artifact Registry and deploy it on Cloud Run

See: 
 - https://github.com/google-github-actions/example-workflows/blob/main/workflows/deploy-cloudrun/
 - https://www.youtube.com/watch?v=DMCi7WWTtX0&ab_channel=GoogleCloudTech
1. Create service account
2. Skip federated identity, just use service account keys
3. Add the following roles to the service account (the service account is the principle)
 - Artifact Registry Administrator
 - Cloud Run Admin
 - Service Account Token Creator
 - Service Account User
 - Storage Admin
4. fix the cloud build push by ensuring it ends with ${{ env.SERVICE }}/${{ env.SERVICE }}
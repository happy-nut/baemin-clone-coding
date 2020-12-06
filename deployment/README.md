# Deployment for Baemin-clone-coding

## Kustomize setup

Install.

```bash
$ brew install kustomize
```

## Upload docker image to gcr.io

Ensure to be logged in gcloud.

```bash
$ gcloud auth login
```

And configure docker.

```bash
$ gcloud auth configure-docker
```

Build docker image and push it. For example:

```bash
$ docker build -t gcr.io/baemin-clone-coding/restaurant-api-server:0.0.1
$ docker push gcr.io/baemin-clone-coding/restaurant-api-server:0.0.1
```

Check image container registry in [console](https://console.cloud.google.com/gcr/images/baemin-clone-coding?project=baemin-clone-coding).

## Build with kustomize and apply

```bash
$ kustomize build . | kubectl apply -f -
```

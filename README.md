# baemin-clone-coding

Clone coding project of [baemin](https://www.baemin.com/) service.

## GKE setup

1. Init gcloud.
```bash
$ gcloud init
```

2. Fetch Kubeconfig for baemin-clone-coding-cluster.

```bash
$ gcloud container clusters get-credentials baemin-clone-coding-cluster --region asia-southeast1 --project baemin-clone-coding
```

3. (Optional) Install k9s. 

```
$ brew install k9s
```


#!/bin/bash

# build docker image
docker build --platform linux/amd64 -t sirius-fe .

if [ $1 == "local" ]
then
        # run docker image
        docker run --rm -p 3000:3000 -d -it sirius-fe
        exit
fi

# login to aws ecr
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 428008882575.dkr.ecr.eu-west-1.amazonaws.com

# tag image
docker tag sirius-fe 428008882575.dkr.ecr.eu-west-1.amazonaws.com/sirius:sirius-fe

# push image
docker push 428008882575.dkr.ecr.eu-west-1.amazonaws.com/sirius:sirius-fe

# get account id
# aws sts get-caller-identity --query "Account" --output text

# delete all images
# docker rmi -f $(docker images -aq)  

# delete all containers
# docker rm -vf $(docker ps -aq)
#accesskey: AKIAWHJ2RIGHSU4AEHVQ
#secretkey: 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
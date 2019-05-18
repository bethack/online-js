#!/usr/bin/env bash

ssh-keyscan -H $MACHINE_ADDRESS >> ~/.ssh/known_hosts
chmod 600 ./deploy_key
ssh -i ./deploy_key $MACHINE_USERNAME@$MACHINE_ADDRESS << EOF
cd html && \
git checkout master && \
git pull
exit
EOF

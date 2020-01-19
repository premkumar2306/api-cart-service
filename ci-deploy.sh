#!/bin/bash

cd gateway
serverless deploy --stage dev
sleep 5s

cd ..
cd products
serverless deploy --stage dev
sleep 5s

cd ..
cd search
serverless deploy --stage dev
sleep 5s

echo "Press any key to continue"
read
#!/bin/bash

sudo docker remove centerville-container
sudo docker run -d -p 3000:3000 --name centerville-container centerville-barbers:latest

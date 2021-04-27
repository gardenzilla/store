.PHONY: release, build, run, serve, push

release:
	ng build --prod --outputPath=dist

build:
	ng build --outputPath=dist

run:
	ng serve --port 4701 --source-map=false

push:
	docker push gardenzilla/client:latest

serve: dev
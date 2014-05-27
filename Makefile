# Root Makefile for Backbuffer app.

.PHONY: all debug prod dev_install
all:
	$(error Please specify a rule. Valid rules are: debug, prod and install)
dev_install:
	@echo 'Nothing to install'

# POG ftw...
prod: debug

debug:
	jade --pretty app/views/index.jade --out ./
	compass compile
	cat app/scripts/*.js > public/js/backbuffer.js

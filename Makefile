FILES = $(shell find test -name "*Test.js")

test:
	@echo $(FILES)
	@NODE_ENV=test ./node_modules/.bin/mocha $(FILES)

test-w:
	@NODE_ENV=test ./node_modules.bin/mocha \
		--watch

.PHONY: test test-w


KARMA = ./node_modules/karma/bin/karma
ESLINT = ./node_modules/eslint/bin/eslint.js
RUNNER = ./node_modules/mocha/bin/_mocha
FILES = $(shell find src tests -name "*.js*")
TESTS = $(shell find tests -name "*Test.js")

install:
	npm install

dev:
	node server.js

lint:
	node $(ESLINT) $(FILES)

test:
	$(RUNNER) --compilers js:babel/register --recursive --require tests/helper.js $(TESTS)

karma:
	$(KARMA) start

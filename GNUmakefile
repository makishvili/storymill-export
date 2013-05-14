NODE_MODULES := ./node_modules/

ENB := $(NODE_MODULES).bin/enb
NPM := npm

GITHUB_REPO := git@github.com:dfilatov/twitter-trends.git
HEROKU_REPO := git@heroku.com:twitter-trends.git

.PHONY: enb-server
enb-server:: $(ENB)
	@$(ENB) server --port 3001 --host localhost

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) install

.PHONY: app-dev
app-dev:
	supervisor -w lib,configs,desktop.bundles/index/index.blocks.js boot.js

.PHONY: app
app:
	node boot.js

.PHONY: clean
clean::
	$(BEM) make -m clean

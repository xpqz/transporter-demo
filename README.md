# transporter-demo
Configs and various pipelines and example transforms for demoing the Cloudant adaptor for Compose Transporter. To install the transporter system from scratch, including Stefan's experimental Cloudant adaptor, please follow the following steps (OSX):

- Install Go 1.5.X, 64bit, e.g:
  
  `% brew install go`

- Install mercurial. It's required for a dependency of Transporter's.

  `% brew install mercurial`

- Create an environment variable `$GOPATH` pointing to your preferred workspace, e.g.:

  ```bash
  % echo "export GOPATH=/Users/myname/work/go" >> ~/.profile
  % echo 'export PATH="$GOPATH/bin:$PATH"' >> ~/.profile; source ~./profile
  % mkdir -p $GOPATH
  ```

- Install `godep`, a dependency manager that Transporter uses:

  `% cd $GOPATH; go get github.com/tools/godep`

- Install Stefan's fork of the go-couchdb client lib:

  ```bash
  % cd $GOPATH
  % go get github.com/xpqz/go-couchdb
  ```

- Install transporter:

  `% go get github.com/compose/transporter`

  This will give you an error that you can safely ignore:

  ```text
  package github.com/xpqz/transporter: no buildable Go source files in
  /Users/stefan/work/demo/go/src/github.com/xpqz/transporter
  ```

  The reason this errors is that Transporter doesn't quite obey Go's recommended project layout.

- Set Stefan's hacked-up version as a fork, and pull down the changes:

  ```bash
  % cd $GOPATH/src/github.com/compose/transporter
  % git remote add fork https://github.com/xpqz/transporter
  % git pull fork master
  ```
  
  You should see two files changing: `cloudant.go` and `registry.go`

- Build transporter:

  ```bash
  % cd $GOPATH/src/github.com/compose/transporter
  % godep restore
  % godep go build -a ./cmd/...
  ```
  
- Clone this repo in order to get the example files:

  ```bash
  % cd $GOPATH/src/github.com/compose/transporter
  % git clone https://github.com/xpqz/transporter-demo.git
  ```
  
- Edit the example config file, found in `transporter-demo/config/config.yaml` with your Cloudant account details, ideally with a user that has write permissions. You should now be able to run the first example, reading data from a file, and writing to a Cloudant database:

  ```bash
  % cd $GOPATH/src/github.com/compose/transporter
  % ./transporter run --config transporter-demo/config/config.yaml transporter-demo/applications/file-cdt.js
  ```

- The other applications and transformers make use of Stefan's `routes` database. It is open for reading, so please replicate it if you wish, or use the examples as a guide for how to use your own databases.

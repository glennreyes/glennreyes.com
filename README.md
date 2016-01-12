# Website of Glenn Reyes

## Usage in development
#### Install bower & npm packages
```
bower install && npm install
```
#### Build
```
gulp
```
#### Serve
```
gulp serve
```
#### Serve (dist)
```
gulp serve:dist
```
#### Update npm packages (requires npm-check-updates):
```
ncu -u && npm update
```
## Deploy to S3
Requires __s3cmd__ and to be configured
#### Sync with S3 bucket
```
npm run deploy
```
#### Clean S3 Bucket (caution!)
```
npm run clean
```

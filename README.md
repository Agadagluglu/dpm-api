# dpm-api
RESTfull API for Microsoft DPM

# deploy

Get the code :
```
git clone https://github.com/Agadagluglu/dpm-api
cd dpm-api
```

Install npm modules :
```
cd start/dpm-api
npm install --save jsonpath swaggerize-ui
```

Test :
```
npm start

# Test GET
curl -X GET --header 'Accept: application/json' 'http://localhost:8000/jobs'

# Test GET by id (int)
curl -X GET --header 'Accept: application/json' 'http://localhost:8000/jobs/1'

# Test GET by id (string)
curl -X GET --header 'Accept: application/json' 'http://localhost:8000/jobs/0c3447f7-e77f-4673-a07b-96177d451cef'
```

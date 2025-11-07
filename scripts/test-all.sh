set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

echo "===> Testing easy del t04 $BASE_URL"

curl_json() {
  local path="$1"
  local body="$2"
  echo
  echo "POST $BASE_URL$path"
  echo "Body: $body"
  curl -s -X POST "$BASE_URL$path" \
    -H "Content-Type: application/json" \
    -d "$body"
  echo
}

echo "Taller 1"
curl_json "/api/taller1/convertidor-temp" '{"celsius": -40}'
curl_json "/api/taller1/resolvedor" '{"a":1,"b":5,"c":4,"signo":true}'
curl_json "/api/taller1/mejor-paridad" '{"n":4}'
curl_json "/api/taller1/peor-paridad" '{"n":7}'

echo "Taller 2"
curl_json "/api/taller2/find-max" '{"lista":[3,17,-1,4,-19]}'
curl_json "/api/taller2/includes" '{"lista":[3,17,-1,4,-19],"numero":4}'
curl_json "/api/taller2/sum" '{"lista":[3,17,-1,4,-19]}'
curl_json "/api/taller2/missing-numbers" '{"lista":[7,2,4,6,3,9]}'

echo "Taller 3"
curl_json "/api/taller3/desglosar-string" '{"str":"Murcielagos","escoger":"vocales"}'
curl_json "/api/taller3/two-sum" '{"numeros":[5,6,7,4,2,7],"target":9}'
curl_json "/api/taller3/conversion-romana" '{"romano":"V"}'
curl_json "/api/taller3/descomposicion" '{"cadena":"hellomaria,hello,world,maria,hell,o,weorl"}'

echo
echo "===> Terminado todos los test"

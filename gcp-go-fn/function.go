package p

import (
	"encoding/json"
	"fmt"
	"html"
	"net/http"
)
func HelloWorld(w http.ResponseWriter, r *http.Request) {
	var d struct {
		Name string `json:"name"`
	}
    var name = "World";
	json.NewDecoder(r.Body).Decode(&d);
    
	if d.Name != "" {
		name = d.Name
	}
	fmt.Fprint(w, html.EscapeString("Hello " + name + "! From GCP + Go"))
}
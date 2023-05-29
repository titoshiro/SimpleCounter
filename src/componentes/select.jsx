

function Select(prop){
    return(
        <div className="form-floating">
                <select
                  value={prop.tiempo}
                  onChange={prop.valorselectchange}
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Abre y selecciona tu tiempo</option>
                  <option value="60">1 minuto</option>
                  <option value="300">5 minutos</option>
                  <option value="600">10 minutos</option>
                  <option value="1800">30 minutos</option>
                  <option value="3600">1 hora</option>
                </select>
              </div>

    )

}
export default Select
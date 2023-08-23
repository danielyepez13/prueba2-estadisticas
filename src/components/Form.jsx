"use client"
import { useState } from "react";
import { read, utils, writeFile } from 'xlsx';
const Form = () => {
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState("")
    // Importa el archivo de excel
    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    // Quito el primer elemento
                    rows.shift();
                    // Guardo cada fila dentro del estado
                    setMovies(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }

    // Enviar por medio de un endpoint la informacion
    const handleClick = async () => {
        // console.log(movies)
        try {
            let res = await fetch("/api/movies", {
                method: "POST",
                body: JSON.stringify({
                    movies: movies,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setMovies("");
                setMessage("Pelicula registrada");
                console.log(resJson)
            } else {
                setMessage("Ha ocurrido un error");
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
            <div className="row mb-2 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    {/* el atributo accept dentro de un input file, permite acceptar diferentes tipos de archivos según se requieran */}
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                    <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                    <button onClick={handleClick}>Enviar</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <button onClick={handleExport} className="btn btn-primary float-right">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
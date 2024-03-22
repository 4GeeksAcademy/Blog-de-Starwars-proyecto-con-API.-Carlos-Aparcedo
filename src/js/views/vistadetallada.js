import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export function DetailView() {
    const { id } = useParams();
    const url = `https://www.swapi.tech/api/people/` + id
    console.log(url);
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getDetalles(url)
    }, [])
    console.log(store.detallespersonaje.properties);
    return (
        <div className="bg dark">
            <div className="card mt-3 mx-auto" style={{ maxWidth: "58%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${store.detallespersonaje.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-2">{store.detallespersonaje.properties?.name}</h5>
                            <p className="card-text">{store.detallespersonaje.description}</p>
                        </div>
                    </div>
                </div>
                <hr class="border border-danger border-2 opacity-50 mt-3"></hr>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Name:</p>
                            <p>{store.detallespersonaje.properties?.name}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Gender:</p>
                            <p>{store.detallespersonaje.properties?.gender}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Birthday:</p>
                            <p>{store.detallespersonaje.properties?.birth_year}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Height:</p>
                            <p>{store.detallespersonaje.properties?.height}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Skin:</p>
                            <p>{store.detallespersonaje.properties?.skin_color}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Eyes:</p>
                            <p>{store.detallespersonaje.properties?.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
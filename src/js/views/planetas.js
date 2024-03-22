import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export function Planetas() {
    const { id } = useParams();
    const url = `https://www.swapi.tech/api/planets/` + id
    console.log(id);
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlaneta(url)
    }, [])
    console.log(store.planeta);
    return (
        <div className="bg dark">
            <div className="card mt-3 mx-auto" style={{ maxWidth: "72%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={store.planeta.uid == 1 ?
                            `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
                            :
                            `https://starwars-visualguide.com/assets/img/planets/${store.planeta.uid}.jpg`
                        } className="img-fluid rounded-start" style={{ width: "100%" }} alt="..." />
                        {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${store.planeta.uid}.jpg`} className="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-2">{store.planeta.properties?.name}</h5>
                            <p className="card-text">{store.planeta.description}</p>
                        </div>
                    </div>
                </div>
                <hr class="border border-danger border-2 opacity-50 mt-5"></hr>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Name:</p>
                            <p>{store.planeta.properties?.name}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Climate:</p>
                            <p>{store.planeta.properties?.climate}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Terrain:</p>
                            <p>{store.planeta.properties?.terrain}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Diameter:</p>
                            <p>{store.planeta.properties?.diameter}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Surface Water:</p>
                            <p>{store.planeta.properties?.surface_water}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Gravity:</p>
                            <p>{store.planeta.properties?.gravity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
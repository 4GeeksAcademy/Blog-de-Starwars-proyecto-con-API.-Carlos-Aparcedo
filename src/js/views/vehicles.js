import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export function Vehicles() {
    const { id } = useParams();
    const url = `https://www.swapi.tech/api/vehicles/` + id
    console.log(id);
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getVehicle(url)
    }, [])
    console.log(store.vehicle);
    return (
        <div className="bg dark">
            <div className="card mt-3 mx-auto" style={{ maxWidth: "90%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicle.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-2">{store.vehicle.properties?.name}</h5>
                            <p className="card-text">{store.vehicle.description}</p>
                        </div>
                    </div>
                </div>
                <hr class="border border-danger border-2 opacity-50 mt-5"></hr>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                        <p className='fs-5 fw-bold text-danger'>Name:</p>
                            <p>{store.vehicle.properties?.name}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Model:</p>
                            <p>{store.vehicle.properties?.model}</p>
                        </div>
                        <div class="col">
                        <p className='fs-5 fw-bold text-danger'>Length:</p>
                            <p>{store.vehicle.properties?.length}</p>
                        </div>
                        <div class="col">
                        <p className='fs-5 fw-bold text-danger'>Passengers:</p>
                            <p>{store.vehicle.properties?.passengers}</p>
                        </div>
                        <div class="col">
                        <p className='fs-5 fw-bold text-danger'>Cargo capacity:</p>
                            <p>{store.vehicle.properties?.cargo_capacity}</p>
                        </div>
                        <div class="col">
                        <p className='fs-5 fw-bold text-danger'>Manufacturer:</p>
                            <p>{store.vehicle.properties?.manufacturer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
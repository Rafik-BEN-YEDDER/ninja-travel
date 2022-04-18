import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getvoyage } from "../redux/action/voyage";
import BuyTicket from "./BuyTicket";
import DeleteVoyage from "./DeleteVoyage";
import EditVoyage from "./EditVoyage";

function ListeVoyage() {
  const load = useSelector((state) => state.voyageReducer.load);

  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const voyages = useSelector((state) => state.voyageReducer.voyages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getvoyage());
  }, [dispatch]);
  return (
    <div>
      <section className="main-content">
        <div className="container">
          <h1>Liste des voyages</h1>
          <br />
          <br />
          <table class="table">
            <thead>
              <tr>
                <th>Depart</th>
                <th>Arrivee</th>
                <th>Date</th>
                <th>prix</th>
                <th>Places</th>
              </tr>
            </thead>
            {load ? (
              <p>loading</p>
            ) : (
              voyages.map((el) => (
                <tbody>
                  <tr>
                    <td>
                      <h6 className="mb-0">{el.depart}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{el.arrivee}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{el.heure}</h6>
                      <small>{el.date}</small>
                    </td>
                    <td>
                      <h6 className="mb-0">{el.prix} Dt</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{el.places} places</h6>
                    </td>
                    <td>
                      {isAuth?<><EditVoyage voyage={el}/><DeleteVoyage voyage={el}/></>:<BuyTicket voyage={el} /> }
                      
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </section>
    </div>
  );
}

export default ListeVoyage;

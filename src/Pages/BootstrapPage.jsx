import { useContext, useState } from "react"
import { mycontext } from "./Context"
import { useNavigate } from "react-router-dom"
import Navbar from "./Admin/Navbar/Navbar"

import {Row, Stack} from "react-bootstrap"











export default function HomePage() {

  
      const cards = [1, 2, 3, 4, 5, 6, 7, 8];


    return (
      <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-6 col-lg-3 mb-4"
          >
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Card {card}</h5>
                <p className="card-text">
                  Bootstrap responsive card
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}






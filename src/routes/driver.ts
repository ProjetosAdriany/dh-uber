import { Router } from "express";

import ListTrip from "../UseCases/Trip/ListTripCase";

const productRoutes = Router();

productRoutes.get("/trips", async (reques, response) => {
  const ListTripCase = new ListTrip();
});

export default productRoutes;

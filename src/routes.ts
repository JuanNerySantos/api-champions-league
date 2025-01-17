import { Router } from "express";
import {
  createPlayer,
  DeletePlayerById,
  getPlayerById,
  getPlayers,
} from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players/", createPlayer);
router.delete("/players/:id", DeletePlayerById);
router.patch("/players/:id", UpdatePlayer);

export default router;

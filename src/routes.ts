import { Router } from "express";
import {
  createPlayer,
  getPlayerById,
  getPlayers,
} from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players/", createPlayer);

export default router;

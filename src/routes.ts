import { Router } from "express";
import { getClub } from "./controllers/clubs-controller";
import {
  createPlayer,
  DeletePlayerById,
  getPlayerById,
  getPlayers,
  UpdatePlayer,
} from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players/", createPlayer);
router.delete("/players/:id", DeletePlayerById);
router.patch("/players/:id", UpdatePlayer);

router.get("/clubs", getClub);

export default router;

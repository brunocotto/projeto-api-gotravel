const router = require("express").Router();
const authMiddleware = require('../middlewares/auth');

// importa o controller
const travelController = require('../controllers/travelController')

//aplica o middleware em todas as rotas
router.use(authMiddleware);

// rota para listagem tarefas
router.get("/", travelController.listTravel)

// rota para listagem de tarefas por ID
router.get("/:travelId", travelController.listTravelId)

// rota para criar uma nova viagem
router.post("/create", travelController.createTravel)

// rota para atualizar uma viagem por ID
router.patch("/update/:travelId", travelController.updateTravelId)

// rota para deletar uma viagem por ID
router.delete("/delete/:travelId", travelController.deleteTravelId)

// Exportando as rotas
module.exports = router
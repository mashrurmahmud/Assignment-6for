import { Router } from "express";
import courseController from "../controller/courseController.js";


const router = Router();

router.post('/createBook', courseController.createBook );
router.get('/allCourse', courseController.getAllCourse);
router.get('/findOnlyOnebooks/:id', courseController.getOneCourse);



export default router;

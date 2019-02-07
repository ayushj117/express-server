import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
class ControllerTrainee {
    // private constructor(){};
    public get(req: Request, res: Response) {
        const data = [
            {
                name: 'trainee1',
            },
            {
                name: 'trainee2',
            },
        ];
        console.log('trainee');
        res.status(200).send(successHandler("It's get request", data, 200));
    }
    public create(req: Request, res: Response, next) {
        console.log('trainee');
        const { name, id } = req.body;
        console.log('request body', req.body);
        console.log(name, id);
        const data = [
            {
                id,
                name,
            },
        ];
        // if (!name) {
        //     return next({
        //         error: "Not Found",
        //         message: "Name is not found",
        //         status: 404
        //     });
        // }
        // if (!id) {
        //     return next({
        //         error: "Not Found",
        //         message: "Id is not found",
        //         status: 404
        //     });
        // } else
        res.status(201).send(successHandler("It's post request", data, 201));
    }
    public modify(req: Request, res: Response, next) {
        console.log('trainee');
        const { dataToUpdate, id } = req.body;
        const data = [
            {
                id,
                updatedData: dataToUpdate,
            },
        ];
        res.status(200).send(
            successHandler('Given data is updated', data, 200),
        );
    }
    public delete(req: Request, res: Response, next) {
        const { id } = req.params;
        console.log('in controller delete');
        res.status(202).send(successHandler('Data is deleted', id, 202));
    }
}
export default new ControllerTrainee();

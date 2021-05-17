//Schemas
/**
 *  @swagger
 *    components:
 *     schemas:
 *      ecommerceDB:
 *         type: object
 *         required:
 *           - Id
 *           - Name
 *           - Price
 *           - Description
 *           - Image
 *         properties:
 *           _id:
 *             type: string
 *             description: The auto-generated id of the product.
 *           Id:
 *             type: number
 *             description: The Id of the product.
 *           Name:
 *             type: string
 *             description: The Name of the product.
 *           Price:
 *             type: number
 *             description: The Price of the product.
 *           Description:
 *             type: string
 *             description: The Description of the product
 *           Image:
 *             type: string
 *             description: The Image of the product.
 *           __v:
 *             type: integer
 *             description: The version of record.
 */


/**
 *  @swagger
 *    components:
 *     schemas:
 *      User:
 *         type: object
 *         required:
 *           - email
 *           - name
 *           - address1
 *           - password
 *           - city
 *           - zip
 *           - states
 *           - mobileNumber
 *         properties:
 *           _id:
 *             type: string
 *             description: The auto-generated id of the user.
 *           email:
 *             type: string
 *             description: The email of the user.
 *           name:
 *             type: string
 *             description: The Name of the user.
 *           password:
 *             type: string
 *             description: The Password of the user.
 *           address1:
 *             type: string
 *             description: The address of the user
 *           states:
 *             type: string
 *             description: The state of the user.
 *           city:
 *             type: string
 *             description: The city of the user.
 *           mobileNumber:
 *             type: number
 *             description: The mobile number of the user.
 *           __v:
 *             type: integer
 *             description: The version of record.
 */



//Adding a product
/**
 * @swagger
 *  product:
 *   post:
 *     summary: Returns the list of all the products
 *     tags: [Product]
 *     parameters:
 *       - in: body
 *         name: product
 *         description: The product to be added.
 *         schema:
 *           type: application/json
 *           required:
 *             - Id
 *             - Name
 *             - Description
 *             - Price
 *             - Image
 *           properties:
 *           Id:
 *             type: number
 *           Name:
 *             type: string
 *           Price:
 *             type: number.
 *           Description:
 *             type: string
 *           Image:
 *             type: string

 *           example:
 *             {
 *               "Id":1,
 *               "Name":"Samsung Galaxy S5",
 *                "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim",
 *                "Image":"img/s5.png",
 *                "Price":699
 *             }
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *
 */

//Get all Products
/**
* @swagger
*  product:
*   get:
*     summary: Returns the list of all the users
*     tags: [Product]
*     responses:
*       200:
*         description: The list of all the users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/ecommerceDB'
*/
//User Routes
/**
 * @swagger
 *  user:
 *   post:
 *     summary:  User signup
 *     tags: [User]
 *     parameters:
 *       - in: body
 *         name: User
 *         description: to create the user
 *         schema:
 *           type: application/json
 *           required:
 *             - name
 *             - email
 *             - password
 *             - states
 *             - city
 *             - address1
 *             - mobileNumber
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             states:
 *               type: string
 *             city:
 *               type: string
 *             address1:
 *               type: string
 *             mobileNumber:
 *                type: number
 *           example:
 *          {
 *            "name":"Prateek Jain",
 *            "email":"prateekjain597@gmail.com",
 *             "password":"Prateek123!@#",
 *             "mobileNumber":9176802697,
 *             "address1":"7/317 Vidhyadhar Nagar",
 *              "city":"Jaipur",
 *              "states":"Rajasthan",
 *            }
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: User Already Exists
 *         content:
 *           application/json:
 *             schema:
 *
 */

//get all Users (for testing with postman)
/**
* @swagger
 * user:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The details of all the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
              
 */
//User Login
/**
* @swagger
*  user/login:
*   post:
*     summary: For User login
*     tags: [User]
*     parameters:
*       - in: body
*         name: User
*         description: The user to create.
*         schema:
*           type: application/json
*           required:
*             - email
*             - password
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*           example:
*              {
*                  "email" : "someone@examples.com",
*                  "password" : "secure hashed password"
*              }
*     responses:
*       200:
*         description: Returns Jwt Token
*       400:
*         description: Invalid Credentials
*/

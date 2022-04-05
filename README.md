1. Environment
- Node v16.13.1
- MongoDB v5.0
- Postman 9.5.0(for test)
2. Install & Run
- git clone https://github.com/tec-ninja/spielworks-test.git
- cd spielworks-test
- npm install
- npm run dev
3. Test with Postman
- API URLs
    - http://localhost/people/     GET    --- list all people
    - http://localhost/people/:id  GET    --- get one people
    - http://localhost/people      POST   --- create new people
- Usage of Postman
    - Create new people
      You can see object id(Location: /people/$new_id) of newly created document from response header and use it to query one people
      screenshot: test_results/create.png(201)
    - Get one people
      screenshot: test_results/get.png(200)
                  invalid-id.png(when quering with invalid id : 400)
                  valid-but-non-existent-id.png(valid but non-existent id : 404)
    - Get all people
      screenshot: test_results/list.png(200)

PS: As a general rule, Node.js goes well with no-sql databases so I selected MongoDB
But I can use any other dbs if necessary
Also if you want frontend for this test app, I can build it
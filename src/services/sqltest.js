


/*
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-vm'
        },
        options: {
            encrypt: true
        }
    }

    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-app-service'
        },
        options: {
            encrypt: true
        }
    }
*/
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "admin36",
      password: "hello86@M" 
    },
    type: "default"
  },
  server: "ilona13.database.windows.net", 
  options: {
    database: "Etteplan",
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function AddDatabase(device) {
  console.log("Reading rows from the Table...");

    
    
    const finalQuery = "INSERT INTO device (name, description, state, criticality, date) VALUES " + "("+device.name+"," + device.deacription+"," 
    +device.state + "," + device.criticality +","+ device.date+");";
    console.log("query("+finalQuery+")")

  const request = new Request(sql,
    (err, rowCount)=> {
      if (err) {
        console.error(err.message);
      } else {
        console.log('rowCount======='+rowCount);
      }
    }
  );


  connection.execSql(request);
}









/*console.log("Starting...");
connectAndQuery();

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query("SELECT * FROM device;") 
        // output column headers
       /* var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.CategoryName, row.ProductName);
        });
        */

/*        console.log(resultSet);
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}*/
/*
async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Creating table device the Table...");
        var resultSet = await poolConnection.request().query("CREATE TABLE device"+ "("
            +"name varChar(100)" + ","+
            "description varChar(255)"+ "," +
            "state varChar(20)"+","+
            "criticality varChar(20)"+","+
           "date varChar(20)"+ ");"
        );

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.CategoryName, row.ProductName);
        });

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
    /*
}*//*if (result == true) {
    const sql = require('mssql');

    const config = {
        user:'admin36', // better stored in an app setting such as process.env.DB_USER
        password: 'hello86@M', // better stored in an app setting such as process.env.DB_PASSWORD
        server: 'ilona13.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
        port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
        database: 'Etteplan', // better stored in an app setting such as process.env.DB_NAME
        authentication: {
            type: 'default'
        },
        options: {
            encrypt: true
        }
    }
    
    */
    var resultSet 
    async function connectAndQuery() {
        try {
            var poolConnection = await sql.connect(config);
    
            console.log("Reading rows from the Table...");
            resultSet = await poolConnection.request().query("SELECT * FROM device;") 
            console.log(resultSet);
            poolConnection.close();
        } catch (err) {
            console.error(err.message);
        }
    }
    
    
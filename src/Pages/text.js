
       onClick={async ()=>{
                setSub("Submitting...");
                let obj = {
                  names,
                  email,
                  message,
                  "contact_sumbit": true 
                }

                const url = new URL("http://localhost");
                const options = {
                  method: "POST",
                  body: JSON.stringify(obj),
                  headers: {
                    "Content-Type":"application/json"
                  }
                };
                const data = await fetch(url, options).catch(err => false);

                if( ! data ){
                  setSub("Error Submiting!")
                } else {
                  setSub("Successfully Submited");
                }

                console.error(data);

          }};
import useOrbitDb from "../../useOrbitDb.js";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
const ORBIT_DB_CONTENT = "react-ortbitdb-content";
//"/orbitdb/zdpuAknUxcYsKArW2d8KtBhwyLfkmADo4wpwmC8ReKy3Q5pDR/react-ortbitdb-content";

const Contents = () => {
    const { db, records } = useOrbitDb(ORBIT_DB_CONTENT, {
      type: "docstore",
      create: true,
      public: true,
    });
  
    const newContent = (title,description,geoLat,geoLong,tags,urls, owner, ownerSignature) => ({
      id: uuid(),
      title: title,
      date_created: new Date().toISOString(),
      description:description,
      geoLat: geoLat,
      geoLong: geoLong,
      tags: tags,
      urls: urls,
      owner: owner,
      ownerSignature: ownerSignature
    })
    
    const addContent = async () => {
      const doc = newContent();
      await db.put(doc);
    };
  
    return (
      <div>
        <p style={{ fontSize: "0.8em" }}>
          {(records && `Connected to ${ORBIT_DB_CONTENT}`) ||
            `Connecting to ${ORBIT_DB_CONTENT}...`}
        </p>
        {records && (
          <div>
            <h5>
              docs:{" "}
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {records.length}
              </span>{" "}

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Add your Content
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Add Content</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="modal-body">
                    <div class="input-group mb-3">
                    <input type="text" name="title" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" />
                  </div>
                  
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                  
                  <label for="basic-url" class="form-label">Your vanity URL</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                  </div>
                  
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">.00</span>
                  </div>
                  
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
                  </div>
                  
                  <div class="input-group">
                    <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                  </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{ marginLeft: 10 }}
                className="btn  btn-outline-primary"
                onClick={addContent}
              >
                Add
              </button>
            </h5>
            <table className="table table-striped">
              <tbody>
                {/* add an hidden row so strip color cycle on each new event */}
                {(records.length % 2 && (
                  <tr style={{ display: "none" }}>
                    <td>&nbsp;</td>
                  </tr>
                )) ||
                  null}
                {records
                  .reverse()
                  .slice(0, 10)
                  .map((record) => (
                    <tr key={record.id}>
                      <td>{record.date_created}</td>
                      <td>{record.title}</td>
                      <td>
                        {record.tags.map((tag) => (
                          <div
                            key={tag}
                            className={`badge badge-${getBadgeVariant(tag)}`}
                            style={{ margin: "0 5px" }}
                          >
                            {tag}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  export default Contents;
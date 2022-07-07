import useOrbitDb from "../../useOrbitDb.js";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import {getBadgeVariant} from "../../utils/utils.js"

const ORBIT_DB_OFFERS = "react-ortbitdb-offers";
//"/orbitdb/zdpuAknUxcYsKArW2d8KtBhwyLfkmADo4wpwmC8ReKy3Q5pDR/react-ortbitdb-offers";

const Offers = () => {
    const { db, records } = useOrbitDb(ORBIT_DB_OFFERS, {
      type: "docstore",
      create: true,
      public: true,
    });
  
    const addDocument = async () => {
      const doc = newPost();
      await db.put(doc);
    };
  
    return (
      <div>
        <p style={{ fontSize: "0.8em" }}>
          {(records && `Connected to ${ORBIT_DB_OFFERS}`) ||
            `Connecting to ${ORBIT_DB_OFFERS}...`}
        </p>
        {records && (
          <div>
            <h5>
              docs:{" "}
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {records.length}
              </span>{" "}
              <button
                style={{ marginLeft: 10 }}
                className="btn  btn-outline-primary"
                onClick={addDocument}
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
export default Offers  
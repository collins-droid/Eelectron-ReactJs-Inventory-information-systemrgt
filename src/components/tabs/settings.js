import React from 'react';
import '../../assets/css/tabs-css/settings.scss';
class Settings extends React.Component {
  render() {
    return (
      <div className="main-settings">
        {/* user management  */}
        <div
          role="tabpanel"
          class="tab-pane user-manage-div active"
          id="manage"
        >
          <form class="form-container ">
            <fieldset class="scheduler-border settings-field">
              <legend class="scheduler-border">User Settings</legend>
              <table class="table table-borderless" style={{ width: 580 }}>
                <thead>
                  <tr>
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                    <th scope="col" hidden="true" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Username:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="Leader ruvuna"
                      />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Group:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="Staff"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Email:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="ruv@gmail.com"
                      />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Password:
                      </label>
                    </td>
                    <td>
                      <input
                        type="password"
                        class="form-control input-size"
                        id="email"
                        value="password"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Confirm Password:
                      </label>
                    </td>
                    <td>
                      <input
                        type="password"
                        class="form-control input-size"
                        id="email"
                        value="password"
                      />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Firstname:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="Leader"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Lastname:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="Ruvuna"
                      />
                    </td>
                    <td>
                      <label for="email" class="label-size">
                        Phone:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        class="form-control input-size"
                        id="email"
                        value="0788093633"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="email" class="label-size">
                        Gender:
                      </label>
                    </td>
                    <td>
                      <select
                        class="selectpicker select-gender"
                        data-style="btn border"
                        data-show-subtext="true"
                        data-live-search="true"
                      >
                        <option data-subtext="">Select gender</option>
                        <option data-subtext="">male</option>
                        <option data-subtext="">female</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td />
                    <td>
                      <button class="btn btn-primary btn-raised ">
                        <i class="fas fa-archive " style={{ marginRight: 5 }} />
                        Update Changes
                      </button>
                      <button
                        class="btn btn-warning btn-raised "
                        style={{ position: 'relative', left: '5px' }}
                      >
                        <i
                          class="fas fa-arrow-left"
                          style={{ marginRight: 5 }}
                        />
                        Back
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;

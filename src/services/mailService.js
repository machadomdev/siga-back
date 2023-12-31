const { transporter } = require("../config/mailer");
const config = require('config');

exports.sendEmailUserAndPassword = async ({ email, user, password }) => {
    try {
        const info = await transporter.sendMail({
            from: `"SIGA SUPPORT" [${config.get('nodemailer_user')}]`,
            to: `${email}`,
            subject: `IMPORTANTE! - Usuario y Contraseña`,
            html: `
            <div
            style="
              display: flex;
              justify-content: center;
              align-content: center;
              height: 100%;
            "
          >
            <table
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="padding-bottom: 20px; max-width: 516px; min-width: 220px"
            >
              <tbody>
                <tr>
                  <td width="8" style="width: 8px"></td>
                  <td>
                    <div
                      style="
                        border-style: solid;
                        border-width: thin;
                        border-color: #dadce0;
                        border-radius: 8px;
                        padding: 40px 20px;
                      "
                      align="center"
                      class="m_-325074366315064794mdv2rw"
                    ><img src='https://i.postimg.cc/qR2wGsPC/siga-logo.png' border='0' width="100" alt='siga-logo'/>
                    <div
                        style="
                          font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                            Arial, sans-serif;
                          border-top: thin solid #dadce0;
                          color: rgba(0, 0, 0, 0.87);
                          margin-top: 20px;
                          line-height: 32px;
                          padding-bottom: 10px;
                          text-align: center;
                          word-break: break-word;
                        "
                      >
                        <div style="font-size: 22px; padding-top: 20px; width: 450px;">
                        <b>¡Recuperación de contraseña exitosa!</b>
                        </div>
                      </div>
                      <div
                        style="
                          font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                            Arial, sans-serif;
                          border-top: thin solid #dadce0;
                          color: rgba(0, 0, 0, 0.87);
                          margin-top: 20px;
                          line-height: 32px;
                          padding-bottom: 10px;
                          text-align: center;
                          word-break: break-word;
                        "
                      >
                        <div style="font-size: 24px; padding-top: 20px">
                          Usuario
                        </div>
                        <b style="font-size: 21px;">${user}</b>
                      </div>
                      <div
                        style="
                          font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                            Arial, sans-serif;
                          color: rgba(0, 0, 0, 0.87);
                          line-height: 32px;
                          padding-bottom: 10px;
                          text-align: center;
                          word-break: break-word;
                        "
                      >
                        <div style="font-size: 24px; padding-top: 20px;">
                          Contraseña
                        </div>
                        <b style="font-size: 21px;">${password}</b>
                      </div>
                      <div
                        style="
                          font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          color: rgba(0, 0, 0, 0.87);
                          line-height: 20px;
                          padding-top: 20px;
                          text-align: center;
                        "
                      >
          
                        <div
                        style="
                          font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                          color: black;
                          font-size: 18px;
                          line-height: 18px;
                          padding-top: 22px;
                          text-align: center;
                        "
                      >
                        <div>
                          SIGA - UNCA
                        </div>
                        
                      </div>
                      </div>
                    </div>
                  </td>
                  <td width="8" style="width: 8px"></td>
                </tr>
              </tbody>
            </table>
          </div>          
            `,
        });
    } catch (error) {
        throw Error("Algo paso durante el envio del mail");
    }
};

exports.sendEmailVerificationLink = async ({
    email,
    user,
    verificationLink,
}) => {
    try {
        await transporter.sendMail({
            from: `"SIGA SUPPORT" [${config.get('nodemailer_user')}]`,
            to: `${email}`,
            subject: `IMPORTANTE! - Recuperar contraseña`,
            html: `
            <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            "
          >
            <table
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="padding-bottom: 20px; max-width: 516px; min-width: 220px"
            >
              <tbody>
                <tr>
                  <td width="8" style="width: 8px"></td>
                  <td>
                    <div
                      style="
                        border-style: solid;
                        border-width: thin;
                        border-color: #dadce0;
                        border-radius: 8px;
                        padding: 40px 20px;
                      "
                      align="center"
                      class="m_-325074366315064794mdv2rw"
                    ><img src='https://i.postimg.cc/qR2wGsPC/siga-logo.png' border='0' width="80" alt='siga-logo'/>
                      <div
                        style="
                          font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                            Arial, sans-serif;
                          border-bottom: thin solid #dadce0;
                          color: rgba(0, 0, 0, 0.87);
                          line-height: 32px;
                          padding-bottom: 24px;
                          text-align: center;
                          word-break: break-word;
                        "
                      >
                        <div style="font-size: 24px">
                          Solicitud de recuperación de contraseña
                        </div>
                      </div>
                      <div
                        style="
                          font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          color: rgba(0, 0, 0, 0.87);
                          line-height: 20px;
                          padding-top: 20px;
                          text-align: center;
                        "
                      >
                      Se registro una solicitud de recuperación de contraseña para el usuario: <b>${user}</b>, porfavor haga click en el siguiente enlace, o peguelo en su navegador para completar el proceso.<br/>Una vez ingresado al link, <b>su nueva contraseña será su DNI</b>.
                        <div style="padding-top: 32px; text-align: center">
                          <a
                            href=${verificationLink}
                            style="
                              font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                                Arial, sans-serif;
                              line-height: 16px;
                              color: #ffffff;
                              font-weight: 400;
                              text-decoration: none;
                              font-size: 14px;
                              display: inline-block;
                              padding: 10px 24px;
                              background-color: #4184f3;
                              border-radius: 5px;
                              min-width: 90px;
                            "
                            target="_blank"
                            data-saferedirecturl=${verificationLink}
                            >Recuperar contraseña</a
                          >
                          
                        </div>
                        <div
                        style="
                          font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                          color: black;
                          font-size: 18px;
                          line-height: 18px;
                          padding-top: 22px;
                          text-align: center;
                        "
                      >
                        <div>
                          SIGA - UNCA
                        </div>
                        
                      </div>
                      </div>
                    </div>
                  </td>
                  <td width="8" style="width: 8px"></td>
                </tr>
              </tbody>
            </table>
          </div>
            `,
        });
    } catch (error) {
        throw Error("Algo paso durante el envio del mail");
    }
};

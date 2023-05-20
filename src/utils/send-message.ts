import { ChatPostMessageArguments, WebClient } from '@slack/web-api';
import SupervisorData from '../json/birthdays-interface';

export async function sendMessageToUsers(data: Array<SupervisorData>) {
  const slackClient = new WebClient(process.env.BOT_USER_OAUTH_TOKEN);

  for (const supervisor of data) {
    const supervisorEmail = supervisor.supervisor;
    const employees = supervisor.employees;
    let employeesBirthdays = [];
    for (const employeeId in employees) {
      const employee = employees[employeeId];
      employeesBirthdays.push(
        `Employee ${employee.name} has a birthday at ${employee.birthday}!`,
      );
    }
    const { user } = await slackClient.users
      .lookupByEmail({
        email: supervisorEmail,
      })
      .catch((error) => {
        return error;
      });

    const params: ChatPostMessageArguments = {
      channel: user.id,
      text: employeesBirthdays.join('\n'),
    };

    await slackClient.chat.postMessage(params);
  }

  return true;
}

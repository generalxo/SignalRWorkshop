using Microsoft.AspNetCore.SignalR;

namespace SignalRWorkshop.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string fromUser, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", fromUser, message);
        }
    }
}

using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meddelandecentralen.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message, string xTime)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, xTime);
        }
    }
}



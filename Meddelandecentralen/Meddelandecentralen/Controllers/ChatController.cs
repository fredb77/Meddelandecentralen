using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Meddelandecentralen.Models;
using Microsoft.AspNetCore.Mvc;

namespace Meddelandecentralen.Controllers
{
    public class ChatController : Controller
    {
        [HttpPost]
        public ActionResult Index(UserModel UserX)
        {
            if (ModelState.IsValid)
            {
                var user = new List<UserModel>();
                user.Add(UserX);

                return View(user);
            }
            return RedirectToPage("./Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

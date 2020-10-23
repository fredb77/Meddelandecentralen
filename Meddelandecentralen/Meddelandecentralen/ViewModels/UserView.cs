using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Meddelandecentralen.Models;

namespace Meddelandecentralen.ViewModels
{
    public class UserView
    {
        public IEnumerable<UserModel> Users { get; set; }
    }
}

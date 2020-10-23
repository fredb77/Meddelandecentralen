using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Meddelandecentralen.Models
{
    public class UserModel
    {
        [Required]
        public string UserName { get; set; }
        public UserModel User { get; set; }
    }
}

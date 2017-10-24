using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Wow.Db;

namespace Wow.Controllers
{
    [RoutePrefix("api")]
    [EnableCors("*", "*", "*")]
    public class PictureController : ApiController
    {
        [HttpGet]
        [Route("item")]
        public IHttpActionResult GetItems()
        {
            using (var context  = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x=>x.Discriminator== "ItemPicture").ToList();
                return Ok(skills);
            }
        }

        [HttpGet]
        [Route("spell")]
        public IHttpActionResult GetSpells()
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x => x.Discriminator == "SkillPicture" && x.Type == "Spell").ToList();
                return Ok(skills);
            }
        }
        [HttpGet]
        [Route("spell/{player_class}")]
        public IHttpActionResult GetSpells(string player_class)
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x =>
                    x.Discriminator == "SkillPicture" && x.Type == "Spell" && x.Class == player_class).ToList();
                return Ok(skills);
            }
        }

        [HttpGet]
        [Route("talent")]
        public IHttpActionResult GetTalents()
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x => x.Discriminator == "SkillPicture" && x.Type == "Talent").ToList();
                return Ok(skills);
            }
        }

        [HttpGet]
        [Route("dungeon")]
        public IHttpActionResult GetDungeons()
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x => x.Discriminator == "ItemPicture").ToList();
                return Ok(skills);
            }
        }

        [HttpGet]
        [Route("destiny")]
        public IHttpActionResult GetDestiny()
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x => x.Discriminator == "ItemPicture").ToList();
                return Ok(skills);
            }
        }

        [HttpGet]
        [Route("event")]
        public IHttpActionResult GetEvents()
        {
            using (var context = new CardDbEntities())
            {
                var skills = context.Pictures.Where(x => x.Discriminator == "ItemPicture").ToList();
                return Ok(skills);
            }
        }
    }
}
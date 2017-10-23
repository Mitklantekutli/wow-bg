using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Api.Db
{
    public class PictureManager
    {
        public List<SkillPicture> GetSkills()
        {
            using (var context = new CardDb())
            {
                return context.SkillPictures.ToList();
            }
        }


    }

    public class CardDb : DbContext
    {
        public virtual DbSet<Picture> Pictures { get; set; }
        public virtual DbSet<SkillPicture> SkillPictures { get; set; }
        public virtual DbSet<ItemPicture> ItemPictures { get; set; }
        public virtual DbSet<DungeonPicture> DungeonPictures { get; set; }
        public virtual DbSet<GameEvent> GameEvents { get; set; }
        public virtual DbSet<DestinyEvent> DestinyEvents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Data Source=localhost\sqlexpress;Initial Catalog=CardDb;Integrated Security=SSPI");
            }
        }
    }

    public class Picture
    {
        public long Id { get; set; }
        public string NameRu { get; set; }
        public string NameEn { get; set; }
        public string NameFr { get; set; }

        public string FileName { get; set; }

        public string FilePath
        {
            get { return @"C:\temp\cards-result\source\" + FileName; }
        }

        public virtual string Info
        {
            get { return FilePath + " " + GetType(); }
        }
    }

    public class GameEvent : Picture
    {
    }

    public class DestinyEvent : Picture
    {
    }


    public class TypeLevelPicture : Picture
    {
        public string Type { get; set; }
        public string Level { get; set; }
    }

    public class SkillPicture : TypeLevelPicture
    {
        public string Class { get; set; }
    }

    public class ItemPicture : TypeLevelPicture
    {
    }

    public class DungeonPicture : Picture
    {
        public string DungeonName { get; set; }
        public string Stage { get; set; }
    }
}

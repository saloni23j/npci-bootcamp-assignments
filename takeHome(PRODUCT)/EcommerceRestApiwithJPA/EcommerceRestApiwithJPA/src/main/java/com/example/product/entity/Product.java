package com.example.product.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
	
	
	@Id		// primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name = "sku")
	private String sku;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "unitprice")
	private float unitprice;
	
	@Column(name = "imageurl")
	private String imageurl;
	
	@Column(name = "unitsinstock")
	private Integer unitsinstock;
	
	@Column(name = "datecreated")
	private Date datecreated;
	
	@Column(name = "lastupdated")
	private Date lastupdated;
	
	@Column(name = "categoryid")
	private Integer categoryid;
	
	
	public Product() {
		
	}

	public Product(Integer productId, String sku, String name, String description, float unitprice, String imageurl,
			Integer unitsinstock, Date datecreated, Date lastupdated, Integer categoryid) {
		super();
		this.id = productId;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitprice = unitprice;
		this.imageurl = imageurl;
		this.unitsinstock = unitsinstock;
		this.datecreated = datecreated;
		this.lastupdated = lastupdated;
		this.categoryid = categoryid;
	}
	public Product( String sku, String name, String description, float unitprice, String imageurl,
			Integer unitsinstock, Date datecreated, Date lastupdated, Integer categoryid) {
		super();
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitprice = unitprice;
		this.imageurl = imageurl;
		this.unitsinstock = unitsinstock;
		this.datecreated = datecreated;
		this.lastupdated = lastupdated;
		this.categoryid = categoryid;
	}

	public Integer getProductId() {
		return id;
	}

	public void setProductId(Integer productId) {
		this.id = productId;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getUnitprice() {
		return unitprice;
	}

	public void setUnitprice(float unitprice) {
		this.unitprice = unitprice;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public Integer getUnitsinstock() {
		return unitsinstock;
	}

	public void setUnitsinstock(Integer unitsinstock) {
		this.unitsinstock = unitsinstock;
	}

	public Date getDatecreated() {
		return datecreated;
	}

	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}

	public Date getLastupdated() {
		return lastupdated;
	}

	public void setLastupdated(Date lastupdated) {
		this.lastupdated = lastupdated;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", sku=" + sku + ", name=" + name + ", description=" + description + ", unitprice="
				+ unitprice + ", imageurl=" + imageurl + ", unitsinstock=" + unitsinstock + ", datecreated="
				+ datecreated + ", lastupdated=" + lastupdated + ", categoryid=" + categoryid + "]";
	}

	
	

}

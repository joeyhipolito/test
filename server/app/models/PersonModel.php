<?php

class PersonModel { 

	private $db;

	public function __construct($db) {
		$this->db = $db;
	}
	
	public function findOne($id) {
		$query = "SELECT * FROM person WHERE id = :id";
        $bind = array(':id' => $id);
        return $this->db->fetch($query, $bind);
	}
	
	public function findAll() {
		$query = "SELECT * FROM person";
        return $this->db->fetchAll($query);
	}
	
	public function create($params) {
		$query = 'INSERT INTO person(first_name, last_name, contact) VALUE(:fname, :lname, :contact)';
        $bind  = array(
            ':fname'   => $params['first_name'],
            ':lname'   => $params['last_name'],
            ':contact' => $params['contact']
        );
		
        return $this->db->query($query, $bind) ? true : false;
		
	}
	
	public function update($id, $params) {
		$query = 'UPDATE person SET first_name = :fname, last_name = :lname, contact = :contact WHERE id = :id';
        $bind  = array(
			':id'      => $id,
            ':fname'   => $params['first_name'],
            ':lname'   => $params['last_name'],
            ':contact' => $params['contact']
        );
		return $this->db->query($query, $bind) ? true : false;
	}
	
	public function delete($id) {
		$query = 'DELETE FROM person WHERE id = :id';
        $bind  = array(
			':id'     => $id
        );
		return $this->db->query($query, $bind) ? true : false;
	}
	
}
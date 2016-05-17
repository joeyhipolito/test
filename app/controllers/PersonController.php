<?php

class PersonController {
	
	private $model;

    public function __construct($model) {
        $this->model = $model;
    }
	
	public function index() {
		echo json_encode($this->model->findAll());
	}
	public function get($id) {
		echo json_encode($this->model->findOne($id));
	}
	public function post() {
		$fname   = $_POST['first_name'];
		$lname   = $_POST['last_name'];
		$contact = $_POST['contact'];
		
		$person  = array(
			'first_name' => $fname,
			'last_name'  => $lname,
			'contact'    => $contact
		);
		
		echo $this->model->create($person);
	}
	public function put($id) {
		
		parse_str(file_get_contents("php://input"), $post_vars);
			
		$fname   = $post_vars['first_name'];
		$lname   = $post_vars['last_name'];
		$contact = $post_vars['contact'];
		
		$person  = array(
			'first_name' => $fname,
			'last_name'  => $lname,
			'contact'    => $contact
		);
		
		echo $this->model->update($id, $person);
	}
	public function delete($id) {
		echo $this->model->delete($id);
	}
}